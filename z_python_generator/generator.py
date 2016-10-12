
import subprocess

def main():
    hosts_file = open("host.txt","r")
    ips = hosts_file.readlines()
    hosts_file.close()
    for ip in ips:
        output = await ping_ip(ip)
        print(output)

async def ping_ip (ip):
    ping = subprocess.Popen(["ping", "-n", "3", ip.strip()], stdout = subprocess.PIPE, stderr = subprocess.PIPE)
    out, error = ping.communicate()
    out = out.strip()
    return out.decode('utf-8')

main()