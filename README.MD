## Nodejs Typescript starter

This project could be used as starting point for a new project, or as ready-to-use hackathon server

## To debug in VSCode add the following in launch.json

{
"version": "0.2.0",
"configurations": [
{
"type": "node",
"request": "attach",
"name": "Node: Nodemon",
"processId": "${command:PickProcess}",
"restart": true,
"protocol": "inspector",
}
]
}
