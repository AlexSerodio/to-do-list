# to-do-list

A to do list web application developed using React + Redux, on which you can create new tasks, mark them as complete, pending and also delete them.

![todo-list](https://user-images.githubusercontent.com/23726229/45857808-eaca3380-bd30-11e8-80ef-6b923df72fd7.png)

## Getting Started

First thing you need to know is that this project is divided in three folders: **backend**, **frontend** and **frontend-redux**. This means that there are two frontend versions of the same project, one developed using only React and other using React and Redux. The reason why these two versions exist is because I wanted to test and compare both versions to see the differences beetwen them (since the main goal here was just learn a little more about them). 

### Prerequisites

To run the project you will need to install only two things: [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/).

#### Installation on Windows machines

If you are on Windows, after installing MongoDB, you will need to add its path in the environment variables of the system. The path to be added should be something such as **some_diretory/MongoDB/Server/3.4/bin**. For Node.js it's not needed to add the environment variable manually.

After these steps, restart your machine and that's it.

To test if the programs are working properly just open a terminal and type

```
mongod
```

to test/start the MongoDB and

```
node -v
```

to test the Node.js.


#### Installation on Linux machines

If you are on Linux, after installing both MongoDB and Node.js, you need to extract their files and move the folders to /opt as shown below

```
sudo mv node /opt/node
sudo mv node /opt/mongodb
``` 

After that, you need to add their paths in the environment variables of the system. The paths to be added should be something such as **/opt/node/bin** for Node.js and **opt/mongodb/bin** for MongoDB.

Finnaly, to work properly MongoDB requires a folder called 'data/db' on your root directory,  so you need to create one (and, just to be sure, change its ownership to you)

```
sudo mkdir /data
sudo mkdir /data/db
sudo chown username:groupname -R /data
```

After these steps, restart your machine and that's it.

To test if the programs are working properly just open a terminal and type

```
mongod
```

to test/start the MongoDB and

```
node -v
```

to test the Node.js.

### Running the project

To run the project, first you need to start the MongoDB. To do this just open a terminal and type 

```
mongod
```

With MongoDB running, you can start the backend and frontend. To do this, first go to the backend and frontend folders and download the dependencies, as shown below
```
npm i
```
Now, just start both backend and frontend using the command below in each of their folders

```
npm run dev
```

(Make sure to start the backend first, otherwise the frontend will not work)

Thats it, now just go to a browser and access the url **localhost:8080** to see the application working. Enjoy it : ) 

## Acknowledgments

* This project was developed for study purposes following a course from Udemy that can be found [here](https://www.udemy.com/react-redux-pt/) and has no intention of being used commercially.
