db.createUser(
	{
		user: "root",
		pwd: "mongoPassword",
		roles: [
			{
				role: "readWrite",
				db: "my-db"
			}
		]
	}
);
