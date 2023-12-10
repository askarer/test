# homework

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