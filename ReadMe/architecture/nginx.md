
# overview of nginx and its usage

```markdown
1. What is nginx?
    - Nginx (pronounced "engine-x") is a high-performance web server, reverse proxy, load balancer, and HTTP cache. It is widely used for serving static content, handling high-concurrency connections efficiently, and as a gateway between clients and backend services.
2. Key features of nginx 
    - Reverse Proxy: Acts as an intermediary between clients and backend servers, improving performance and security.
    - Web Server: Efficiently serves static files like HTML, CSS, JavaScript, and images.
    - Load Balancer: Distributes traffic across multiple servers to ensure reliability and scalability.
    - HTTP Cache: Caches responses to reduce server load and improve response times.
    - Security Features: Can prevent DDoS attacks, handle authentication, and enforce rate limiting.

restart nginx 
- sudo nginx -t (test the configuration)
- sudo systemctl restart nginx 
```
