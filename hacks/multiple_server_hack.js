var servers = ['n00dles', 'foodnstuff'];

for (i = 0; i < servers.length; ++i) {

	var server = servers[i]

	var minsec = getServerMinSecurityLevel(server)
	var sec = getServerMinSecurityLevel(server)

	while (true) {
		hack(server);
		if (minsec + 5 > sec) {
			grow(server);

		}

		else {
			weaken(server);
		}
	}
}