# TEST

point d'entrée de l'api : http://brochain.hd.free.fr:3000/api/latest/

TEMPORAIRE, utilitaire pour les tests : http://brochain.hd.free.fr:3000/api/latest/tmp_raz

vue des versements : http://brochain.hd.free.fr:3000/api/latest/versements

curl -X POST -i -H "Content-Type:application/json" -d '{"client":"adrien","montant":100,"commentaire":"versement 100 euros"}' http://brochain.hd.free.fr:3000/api/latest/versements

curl -X POST -i -H "Content-Type:application/json" -d '{"client":"serge","montant":120,"commentaire":"versement 120 euros"}' http://brochain.hd.free.fr:3000/api/latest/versements

curl -X POST -i -H "Content-Type:application/json" -d '{"client":"Yan","montant":3000,"commentaire":"versement 3000 euros"}' http://brochain.hd.free.fr:3000/api/latest/versements

curl -X PATCH -i -H "Content-Type:application/json" -d '{"montant":1000,"commentaire":"correctif"}' http://brochain.hd.free.fr:3000/api/latest/versements/0

curl -X PUT -i -H "Content-Type:application/json" http://brochain.hd.free.fr:3000/api/latest/versements/0/validate

curl -X DELETE -i -H "Content-Type:application/json" http://brochain.hd.free.fr:3000/api/latest/versements/1

# TODO ?

        Promise<Versement> versement = restTemplate.getForObject("http://localhost:3000/api/v1/versements/1", Versement);

        Promise<Versement> versement = restTemplate.getForObject("http://localhost:3000/api/v2/versements/1", "v2", Versement);

# compile

tsc

# run 

node build/index.js

TEMPORAIRE, utilitaire pour les tests : http://localhost:3000/api/latest/tmp_raz

point d'entrée de l'api : http://localhost:3000/api/latest/

curl -X POST -i -H "Content-Type:application/json" -d '{"client":"adrien","montant":100,"commentaire":"versement 100 euros"}' http://localhost:3000/api/latest/versements

curl -X POST -i -H "Content-Type:application/json" -d '{"client":"serge","montant":120,"commentaire":"versement 120 euros"}' http://localhost:3000/api/latest/versements

curl -X POST -i -H "Content-Type:application/json" -d '{"client":"Yan","montant":3000,"commentaire":"versement 3000 euros"}' http://localhost:3000/api/latest/versements

curl -X PATCH -i -H "Content-Type:application/json" -d '{"montant":1000,"commentaire":"correctif"}' http://localhost:3000/api/latest/versements/0

curl -X PUT -i -H "Content-Type:application/json" http://localhost:3000/api/latest/versements/0/validate

curl -X DELETE -i -H "Content-Type:application/json" http://localhost:3000/api/latest/versements/1


# lecture

https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html

Contradictions ?
http://blog.xebia.fr/2014/03/17/post-vs-put-la-confusion/
http://roy.gbiv.com/untangled/2009/it-is-okay-to-use-post

- "The only thing REST requires of methods is that they be uniformly defined for all resources"
- safe, idempotent > GET
- unsafe, idempotent > PUT ou DELETE
- "complete replacement of a representation", "On doit fournir une entité complète dans le corps d’une requête PUT" > PUT
- "En renvoyant le header Location, en réponse à un POST supposé créer une ressource, je permets au client de connaître son identifiant"

http://javarevisited.blogspot.fr/2016/05/what-are-idempotent-and-safe-methods-of-HTTP-and-REST.html
"Safe methods are HTTP methods that do not modify the resource e.g. a GET request  is safe because it doesn't modify the resource you are requesting e.g. data of a Book. Another safe HTTP method is HEAD, which doesn't change the resource representation on the Server, but all other HTTP methods e.g. POST, PUT, or DELETE are non-safe."
"Some examples of idempotent HTTP methods are GET, PUT, and PATCH. No matter how many times you call them, they will produce the same result with same URI."


https://stackoverflow.com/questions/630453/put-vs-post-in-rest

"You can find assertions on the web that say

POST should be used to create a resource, and PUT should be used to modify one
PUT should be used to create a resource, and POST should be used to modify one
Neither is quite right.

Better is to choose between PUT and POST based on idempotence of the action.

PUT implies putting a resource - completely replacing whatever is available at the given URL with a different thing. By definition, a PUT is idempotent. Do it as many times as you like, and the result is the same. x=5 is idempotent. You can PUT a resource whether it previously exists, or not (eg, to Create, or to Update)!

POST updates a resource, adds a subsidiary resource, or causes a change. A POST is not idempotent, in the way that x++ is not idempotent.

By this argument, PUT is for creating when you know the URL of the thing you will create. POST can be used to create when you know the URL of the "factory" or manager for the category of things you want to create.

so:

POST /expense-report
or:

PUT  /expense-report/10929"

"If the URL is not yet created, you should not be using POST to create it while specifying the name. This should result in a resource not found error because does not exist yet"

https://martinfowler.com/articles/richardsonMaturityModel.html

https://www.youtube.com/watch?v=ybwo_70jpGc

https://stackoverflow.com/questions/389169/best-practices-for-api-versioning

https://stackoverflow.com/questions/671118/what-exactly-is-restful-programming

https://www.ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf
