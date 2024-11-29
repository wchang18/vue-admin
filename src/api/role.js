import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/vue-element-admin/routes',
    method: 'get'
  })
}

export function getRoles(params) {
  return request({
    url: '/role/list',
    method: 'get',
    params
  })
}

export function addRole(data) {
  return request({
    url: '/role/create',
    method: 'post',
    data
  })
}

export function updateRole(data) {
  return request({
    url: `/role/update`,
    method: 'put',
    data
  })
}

export function deleteRole(data) {
  return request({
    url: `/role/delete`,
    method: 'delete',
    data
  })
}

export function getRoleOption() {
  return request({
    url: '/role/all',
    method: 'get'
  })
}
