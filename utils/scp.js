import { getServerList, getScriptList } from "required.js"

var sourceServer = "home"
var server_list = getServerList();
var script_list = getScriptList();

for (i = 0; i < server_list.lenth; ++i) {
	var targetServer = server_list[i];

	for (s = 0; s < script_list.lenth; ++s) {
		var targetScript = script_list[s];

		if (fileExists(targetScript, targetServer)) continue;

		else {
			scp(targetScript, sourceServer, targetServer);
		}

	}
}