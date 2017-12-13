#!/bin/bash
stringcount=`echo -e "$stringcount" | cat mac | wc -l`
cat /dev/null > ip
until [ $stringcount = 0 ]
do
	mac=`sed q mac`
	echo $mac >> ip
	#arp-scan --interface=p5p1 10.1.1.0/24 | grep $mac |  head -n1 | awk '{print $1;}' >> ip

	sed -i '1,1d' mac
	let "stringcount--"
done


stringcount=`echo -e "$stringcount" | cat ip | wc -l`
until [ $stringcount = 0 ]
do
	ip=`sed q mac`
	sshpass -p 930920 ssh -oStrictHostKeyChecking=no root@$ip /bin/sh << EOF
	cp /usr/bin/stb_pubbin.key /usr/bin/stb_custom.bin & fw_setenv update_url $URL
	if [ -n "$(which kill-stbapp)" ]; then kill-stbapp; else killall stbapp; fi;  if [ -f /test.sh ]; then /test.sh http://79.142.197.190:88/test-pages/update.html; else . /start http://79.142.197.190:88/test-pages/update.html; fi;
	EOF

sed -i '1,1d' ip
let "stringcount--"
done





