import request from '@/utils/request'

export function getVersion() {
  return request({
    url: '/kube/version',
    method: 'get'
  })
}

export function getCluster() {
  return request({
    url: '/kube/cluster',
    method: 'get'
  })
}

export function getNodes() {
  return request({
    url: '/kube/nodes',
    method: 'get'
  })
}

export function getNamespaces() {
  return request({
    url: '/kube/namespaces',
    method: 'get'
  })
}

export function createNamespace(data) {
  return request({
    url: '/kube/createNamespace',
    method: 'post',
    data
  })
}

export function deleteNamespace(data) {
  return request({
    url: '/kube/deleteNamespace',
    method: 'delete',
    data
  })
}

export function getServices(params) {
  return request({
    url: '/kube/serviceList',
    method: 'get',
    params
  })
}

export function createService(data) {
  return request({
    url: '/kube/createService',
    method: 'post',
    data
  })
}

export function deleteService(data) {
  return request({
    url: '/kube/deleteService',
    method: 'delete',
    data
  })
}

export function getPods(params) {
  return request({
    url: '/kube/pods',
    method: 'get',
    params
  })
}

export function getDeployments(params) {
  return request({
    url: '/kube/deployments',
    method: 'get',
    params
  })
}

export function createDeployment(data) {
  return request({
    url: '/kube/createDeployment',
    method: 'post',
    data
  })
}

export function deleteDeployment(data) {
  return request({
    url: '/kube/deleteDeployment',
    method: 'delete',
    data
  })
}

export function getJobs(params) {
  return request({
    url: '/kube/jobs',
    method: 'get',
    params
  })
}

export function createJob(data) {
  return request({
    url: '/kube/createJob',
    method: 'post',
    data
  })
}

export function deleteJob(data) {
  return request({
    url: '/kube/deleteJob',
    method: 'delete',
    data
  })
}

export function getCronJobs(params) {
  return request({
    url: '/kube/cronjobs',
    method: 'get',
    params
  })
}

export function createCronJob(data) {
  return request({
    url: '/kube/createCronJob',
    method: 'post',
    data
  })
}

export function deleteCronJob(data) {
  return request({
    url: '/kube/deleteCronJob',
    method: 'delete',
    data
  })
}
