CREATE DATABASE practice2_2;
use practice2_2;

CREATE TABLE Activity (
    player_id INT,
    device_id INT,
    event_date DATE,
    gameS_played INT,
    PRIMARY KEY (player_id , event_date)
);


INSERT INTO Activity VALUES (1,2,"2016-03-01",5),(1,2,"2016-05-02",6),(2,3,"2017-06-25",1),(3,1,"2016-03-02",0),(3,4,"2018-07-03",5);
INSERT INTO Activity VALUES (1,2,"2016-03-04",5);


SELECT 
    *
FROM
    Activity;
    

-- case1Q1
SELECT 
    player_id, MIN(event_date) AS first_login
FROM
    Activity
GROUP BY player_id;


-- case1Q2;

SELECT 
    a.player_id, a.device_id
FROM
    Activity a
        JOIN
    (SELECT 
        player_id, MIN(event_date) AS first_login
    FROM
        Activity
    GROUP BY player_id) b ON b.first_login = a.event_date;

-- case1Q3

INSERT INTO Activity VALUES (1,3,"2017-06-25",1);


select player_id,
    event_date, sum(gameS_played) OVER(PARTITION BY player_id ORDER BY event_date) from Activity;


SELECT
    player_id,
    event_date,
    SUM(games_played) OVER(PARTITION BY player_id) as games_played_so_far
FROM Activity