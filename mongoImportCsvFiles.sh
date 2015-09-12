mongoimport --port 3001 --db meteor -c Citations --file "Citations.csv" --type csv --headerline
mongoimport --port 3001 --db meteor -c Courts --file "Courts.csv" --type csv --headerline
mongoimport --port 3001 --db meteor -c Defendent --file "Defendent.csv" --type csv --headerline
mongoimport --port 3001 --db meteor -c Users --file "Users.csv" --type csv --headerline
mongoimport --port 3001 --db meteor -c Violation --file "Violation.csv" --type csv --headerline
mongoimport --port 3001 --db meteor -c Boundaries --file boundariesbackup.json
mongoimport --port 3001 --db meteor -c Boundaries001 --file boundaries001backup.json
mongoimport --port 3001 --db meteor -c Boundaries005 --file boundaries005backup.json