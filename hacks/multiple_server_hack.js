import { getServerList } from "servers.script"


var server_list = getServerList();

while (true) {

	// Itterates through list of servers from import
	for (i = 0; i < server_list.length; ++i) {

		// Gets server name from list
		var target = server_list[i];

		// Security Level variables for Servers
		var securityThresh = getServerMinSecurityLevel(target) + 5;
		var securityLevel = getServerSecurityLevel(target);

		// Money Thresh
		var moneyThresh = getServerMaxMoney(target) * 0.75;

		if (securityLevel > securityThresh) {
			weaken(target);
		}

		else if (getServerMoneyAvailable(target) < moneyThresh) {
			grow(target)
		}

		else {
			hack(target)
		}
	}
}