# Instructions

You're calling three different external services to get the items you need.

There's no link to be done between them, so design 3 ports

## Ships
You need to provide (to your client) a list of ships. But only ships that are below a 100 tonnes.
So there's filtering to be done. You need to provide the name and the price

## Endpoints
You interrogate an api to get the address names, the ips and sometimes the netmasks

Your software is going to acccess the servers and sometimes assign ips based on the netmasks


## Mobile customers
You read the data from a legacy api. 

your application just needs to transport the data from the legacy api to another external api. 
The other system takes the same input, receiving system expects the name  of the client as a string and the dataSpeed (4G, 5G) as a string. 


