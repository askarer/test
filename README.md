# homework

```console
GET http://localhost:3100 reads the content of saved file
GET http://localhost:3100/write writes the current time to file

file will be saved to given PVC

GET http://localhost:3200 reads file from API (http://localhost:3100)
and displays it in the web page

```

**Commands**
```console
cd api
docker build -t api:latest .

cd web
docker build -t web:latest

kubectl apply -f api-pvc.yaml
kubectl apply -f api-deployment.yaml
kubectl apply -f api-service.yaml
kubectl apply -f api-service-load-balancer.yaml
kubectl apply -f web-deployment.yaml
kubectl apply -f web-service.yaml
kubectl apply -f web-service-load-balancer.yaml
kubectl apply -f web-ingress.yaml
```