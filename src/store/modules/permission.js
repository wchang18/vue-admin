import { asyncRoutes, constantRoutes } from '@/router'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(needRoutes, route) {
  if (route.name) {
    return needRoutes.includes(route.name)
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, needRoutes) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(needRoutes, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, needRoutes)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, data) {
    const { needRoutes, isAdmin } = data
    console.log(needRoutes, isAdmin)
    return new Promise(resolve => {
      let accessedRoutes
      if (isAdmin === 1) {
        console.log('admin')
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, needRoutes)
      }
      // const accessedRoutes = filterAsyncRoutes(asyncRoutes, needRoutes)
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
