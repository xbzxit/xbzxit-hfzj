## 安装 helm

~~yum install -y wget~~
~~wget https://get.helm.sh/helm-v2.16.3-linux-amd64.tar.gz~~
~~tar -zxvf helm-v2.16.3-linux-amd64.tar.gz~~
~~mv linux-amd64/helm /usr/local/bin/~~
~~mv linux-amd64/tiller  /usr/local/bin/~~

```
curl -L https://git.io/get_helm.sh | bash
```

* **创建helm-rbac.yaml**

```
apiVersion: v1
kind: ServiceAccount
metadata: 
 name: tiller
 namespace: kube-system

---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata: 
 name: tiller
roleRef: 
 apiGroup: rbac.authorization.k8s.io
 kind: ClusterRole
 name: cluster-admin
subjects:
 - kind: ServiceAccount
   name: tiller
   namespace: kube-system
```

* **创建helm服务端**

```
kubectl apply -f helm-rbac.yaml
```

## 安装 Tiller

> --tiller-image 指定镜像

```
helm init --service-account=tiller --tiller-image=sapcc/tiller:v2.17.0 --history-max 300 
```

* **查看安装的状态**

```
kubectl get pods --all-namespaces
```



存储类型

* **获取所有节点信息**

```
kubectl get node -o wide
```

* **查询Taint并去除**

```
kubectl describe node k8s-node1 | grep Taint

kubectl taint nodes k8s-node1 node-role.kubernetes.io/master:NoSchedule-
```

* **创建openebs的名称空间**

```
kubectl create ns openebs
```
