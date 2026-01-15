🚀 CI/CD Automated Load Testing Framework
Overview
This repository contains a fully automated CI/CD pipeline designed to validate Kubernetes application performance during the Pull Request phase. It reflects an "Owner of IT" approach  by integrating infrastructure provisioning, application orchestration, and automated reporting into a single, cohesive workflow.
+1

🛠 Tech Stack & Rationale

CI/CD Engine: GitHub Actions - Chosen for its native integration and ability to manage complex job dependencies.


Infrastructure: KinD (Kubernetes in Docker) - Utilized to provision a multi-node (3 nodes) cluster locally on the runner, ensuring cost-efficiency and environment parity.
+2


Ingress Controller: NGINX - The industry standard for handling host-based routing and SSL termination.


Load Testing: k6 (JavaScript) - Selected for its high performance and scriptability, leveraging my background in NodeJS and TypeScript.


🏗 Architecture & Workflow
The pipeline follows a strict "Secure-by-Design" and reliable deployment methodology:
+1


Cluster Provisioning: Initializes a 1-master, 2-worker node cluster via KinD.
+1


Infrastructure Health Check: Deploys the NGINX Ingress and uses kubectl wait to ensure the controller is ready before proceeding, preventing false negatives in CI.


Declarative Deployment: Applies Kubernetes manifests for the http-echo services (foo/bar) and configures host-based routing.

Automated Load Test: Executes a 30-second randomized traffic burst.

Intelligence Reporting: Summarizes latency (avg, p90, p95), success rates, and throughput (req/s), then automatically comments on the GitHub PR.

📈 Performance & Reliability Features

Multi-Node Simulation: Unlike single-node setups, this cluster tests the distribution of workloads across multiple worker nodes.
+1


Error Handling: Implements robust root cause analysis (RCA) logic within the pipeline to fail fast if the ingress or deployments do not reach a "Healthy" state within the timeout period.


⏱ Time Estimates
Total Time Taken: ~4.5 hours.

Breakdown:

Infrastructure Logic (KinD & K8s Config): 1 hour

Load Testing Scripting (k6): 1 hour

GitHub Actions Integration & PR Automation: 1.5 hours

Documentation & Refinement: 1 hour

🔮 Stretch Goals & Future Considerations

Observability: Integrating a Prometheus sidecar to capture CPU and Memory utilization during load spikes.

Author: Hai Nguyen – Devops Engineer
+2

