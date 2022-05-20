# stats-generator
v 1.0.0
This microservice generates any number of sample data points with uniform or normal distribution.

It listens on `port 8000`, and expects an `HTTP POST` request to the root directory and returns a json object containing the data.

The body of the `POST` request should contain the following json:
```
{
distribution: <string in "normal", "uniform">, 
params: { min: <positive int>, max: <positive int>, [alpha: <float>]}, 
multiplicity: <positive int>
}
```

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

Once installed run, use the command `npm start` to start the service.
