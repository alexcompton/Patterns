
import subprocess

host_folder = "C:/Users/alex_compton/Desktop/patterns/Cloud"

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
        print("creating pattern directory: " + pattern)
        folder = host_folder + "/" + pattern
        dir = subprocess.check_output(["dotnet", "new"], shell=True, stderr = subprocess.STDOUT, cwd=folder.strip())
        print("created c# project: " + pattern)
        dir = subprocess.check_output(["dotnet", "restore"], shell=True, stderr = subprocess.STDOUT, cwd=folder.strip())
        print("restored c# project: " + pattern)
    except subprocess.CalledProcessError:
        print("pattern directory creation failed for: " + pattern)

main()