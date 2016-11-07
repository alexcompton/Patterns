
import subprocess

host_folder = "C:/Users/alex_compton/Desktop/patterns/IOC/Dependency_Injection"

def main():
    pattern_list = get_list()
    for pattern in pattern_list:
        create_pattern(pattern)

def get_list():
    patterns_file = open("patterns.txt","r")
    pattern_list = patterns_file.readlines()
    patterns_file.close()
    return pattern_list

def create_pattern(pattern):
    try:
        dir = subprocess.check_output(["mkdir", pattern.strip()], shell=True, stderr = subprocess.STDOUT, cwd=host_folder.strip())
        print("creating pattern directory: " + pattern.strip())
        folder = host_folder + "/" + pattern
        dir = subprocess.check_output(["dotnet", "new"], shell=True, stderr = subprocess.STDOUT, cwd=folder.strip())
        print("created c# project: " + pattern.strip())
        dir = subprocess.check_output(["dotnet", "restore"], shell=True, stderr = subprocess.STDOUT, cwd=folder.strip())
        print("restored c# project: " + pattern.strip() + "\n")
    except subprocess.CalledProcessError:
        print("pattern directory creation failed for: " + pattern.strip())

main()