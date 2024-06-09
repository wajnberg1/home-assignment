In order to run both backend and frontend dockers please proceed as follows:  
Clone the repo by typing:  
`git clone https://github.com/wajnberg1/home-assignment.git`  
Then move to home-assignment/backend directory and type the following commands:  
`docker build -t backend`  
`docker run -dp 127.0.0.1:8080:8080 backend`  
Then move to home-assignment/frontend directory and type the following commands:  
`docker build -t frontend`  
`docker run -dp 127.0.0.1:5173:5173 frontend`  
Point your browser to http://localhost:5173. The GUI should appear
