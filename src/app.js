import axios from 'axios';

//there could be code here to load manifest json and use the path with query string
//but its not important to this example

let worker = new SharedWorker('/shared.worker.js');
worker.port.start();
