CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    url TEXT NOT NULL
);
INSERT INTO images (name, url)
VALUES (
        'beach',
        'http://www.reactiongifs.com/r/cheering_minions.gif'
    );
INSERT INTO images (name, url)
VALUES ('cheers', 'https://i.gifer.com/WQcv.gif');
INSERT INTO images (name, url)
VALUES (
        'ravels',
        'https://www.hubspot.com/hubfs/Smiling%20Leo%20Perfect%20GIF.gif'
    );
TRUNCATE ONLY images RESTART IDENTITY;