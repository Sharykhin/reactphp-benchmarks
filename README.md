Compare ReactPHP and Nginx:
--------------------------
**Server configuration**  
CPU: 4  
Memory 16 GB Ram  

**Test Plan**  
Users - *1000*  
Ream-Up - *5*  
Loop - *2*  

**Nginx configuration:**  
```
worker_processes 4;  

events {  
    worker_connections 40960;  
    use epoll;  
    multi_accept on;  
}

http {
    fastcgi_buffers 256 16k;
    fastcgi_max_temp_file_size 0;
}

```




