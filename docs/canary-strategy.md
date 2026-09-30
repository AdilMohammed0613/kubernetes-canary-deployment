# Canary Deployment Strategy

## 1. Objective

This project demonstrates a Kubernetes-based canary deployment using K3s and Istio. Two versions of a Node.js application are deployed and traffic is gradually controlled between the stable and canary versions.

## 2. Application Versions

### Version 1 - Stable
Version 1 is the existing stable release of the application.

### Version 2 - Canary
Version 2 represents the new release being tested with a limited percentage of production traffic.

## 3. Canary Traffic Strategy

Initial traffic distribution:

- Version 1: 80%
- Version 2: 20%

Istio VirtualService is used to control the traffic distribution.

## 4. Validation

Twenty HTTP requests were sent through the Istio Gateway.

Observed result:

- Version 1: 16 requests
- Version 2: 4 requests

This demonstrated the intended 80/20 traffic distribution during testing.

## 5. Promotion

After successful validation, traffic can be promoted to:

- Version 1: 0%
- Version 2: 100%

This makes Version 2 the active application version.

## 6. Rollback

If the canary version requires rollback, traffic can be changed to:

- Version 1: 100%
- Version 2: 0%

This immediately routes application traffic back to the stable version.

## 7. Technologies

- Docker
- K3s
- Kubernetes
- Istio
- Node.js
- Express.js
- kubectl
- k3d

## 8. Outcome

The project demonstrates controlled traffic splitting, canary validation, promotion, and rollback using Kubernetes and Istio.
