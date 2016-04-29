Compare ReactPHP and Nginx:
--------------------------
**Server configuration:**  
CPU: 4  
Memory 16 GB Ram  

**Test Plan:**  
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

**Backed configuration:**  
PHP 7.0  
Symfony 2.8  
env=prod  


**Installation:**  

There are several symfony projecs, and it may be surptising nodejs project, but let's leave it aside for a moment.
Pay your attention to **nginx** symfony project and **reactphp** because the server of reactphp project was writtern customly without any third-party libraries as in jogaram-react-bundle or php-pm projects.  

Run `composer install` in each directory which you are going to test.  

For nginx just put configuration into approprtiate nginx folder and change your paths, keep in mind, that default nginx project listens 8000 port.  

For reactphp projects move nginx configuration to approptiate folder, here is nginx is mostrly load-balancer. Create row in hosts file for server name, in our case it is fastapp_react.com. Open terminal and launch 4 instancies
```
php bin/react.php --port=1337
php bin/react.php --port=1338
php bin/react.php --port=1339
php bin/react.php --port=1340
```
Of couse each instance must be launc in separate terminal.  



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

**Notice:** I am not sure if it is possible at all to have a responce in 1 milisecond.

**Notice:** Despite that fact that there were run 4 instancies of reactphp, CPU usage was less than in Nginx case.  

Here is Apache JMeter configuraton, where all this data was taken from.

Feel free to make any remarks or notices, because obviously it's just surface testing. And I am going to run stress test on independen machine for a while, let's assume, for a week.

**Contacts:**  
email: *chapal@inbox.ru*  
skype: *chapal_87*


