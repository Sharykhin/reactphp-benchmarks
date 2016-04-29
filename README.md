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

**Backed configuration**  
PHP 7.0  
Symfony 2.8  
env=prod  

**Nginx tests:**
1 test:
```
Avegae: 190
Min: 6
Max: 542
Throughput: 282.0/sec
```

2 test:
```
Avegae: 96
Min: 5
Max: 360
Throughput: 272.3/sec
```

3 test:
```
Avegae: 243
Min: 1 (502 error)
Max: 717
Throughput: 299.8/sec
```

4 test:
```
Avegae: 105
Min: 6
Max: 385
Throughput: 293.6/sec
```

5 test:
```
Avegae: 178
Min: 7
Max: 412
Throughput: 294.2/sec
```

**ReactPHP tests:**  

1 test:
```
Avegae: 11
Min: 1
Max: 69
Throughput: 342.8/sec
```

2 test:
```
Avegae: 9
Min: 1
Max: 92
Throughput: 369.4/sec
```

3 test:
```
Avegae: 7
Min: 1
Max: 63
Throughput: 363.4/sec
```

4 test:
```
Avegae: 9
Min: 1
Max: 75
Throughput: 356.4/sec
```

5 test:
```
Avegae: 8
Min: 1
Max: 75
Throughput: 354.8/sec
```

Notice: I am not sure if it is possible at all to have a responce in 1 milisecond.

