# stats-generator
v 1.0.0
This microservice generates any number of sample data points with uniform or normal distribution.

It listens on port 8000, and expects an HTTP POST request to the root directory and returns a json object containing the data.

The body of the HTTP POST request should contain the following body:

{
distribution: <string in "normal", "uniform">, 
params: { min: <positive int>, max: <positive int>, [alpha: <float>]}, 
multiplicity: <positive int>
}

To run, use the command npm start.
