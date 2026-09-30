# Kubernetes-Based Canary Deployment with K3s and Istio

## Introduction

This project demonstrates a Kubernetes-based canary deployment using K3s and Istio. The objective is to deploy two versions of a Node.js application and control traffic between the stable and canary versions.

## Abstract

A canary deployment introduces a new application version to a limited percentage of traffic before making it fully active. In this project, Version 1 was deployed as the stable release and Version 2 as the canary release. Istio was used to control traffic distribution between the two versions.

An 80% stable and 20% canary traffic split was configured and tested using HTTP requests. The deployment was then promoted to 100% canary traffic and a rollback to 100% stable traffic was demonstrated.

## Tools Used

- Docker
- Kubernetes
- K3s
- k3d
- Istio
- Node.js
- Express.js
- kubectl
- PowerShell

## Steps Involved

1. Created two Node.js application versions.
2. Built Docker images for Version 1 and Version 2.
3. Created a K3s cluster using k3d.
4. Imported the Docker images into the K3s cluster.
5. Created Kubernetes deployments for both application versions.
6. Created a Kubernetes Service to expose the application internally.
7. Enabled Istio sidecar injection.
8. Created an Istio Gateway and DestinationRule.
9. Configured an Istio VirtualService with 80% traffic to Version 1 and 20% traffic to Version 2.
10. Tested the traffic distribution using multiple HTTP requests.
11. Promoted Version 2 to receive 100% of the traffic.
12. Demonstrated rollback by routing 100% of traffic back to Version 1.

## Conclusion

The project successfully demonstrates a practical canary deployment workflow using Kubernetes, K3s, Docker, and Istio. Traffic can be gradually introduced to a new application version, validated, promoted, or rolled back without changing the application service itself.
