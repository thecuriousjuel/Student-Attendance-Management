import os

# Define the directories and files to scan
directories = ['src', 'static', 'templates']
files = ['main.py']

def count_lines_in_file(file_path):
    """Counts the number of lines in a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return sum(1 for _ in f)
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return 0

def count_lines_in_directory(directory):
    """Recursively counts lines in all files within a directory."""
    total_lines = 0
    for root, _, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            lines = count_lines_in_file(file_path)
            print(f"{file_path}: {lines} lines")
            total_lines += lines
    return total_lines

# Process directories
total_lines = 0
for directory in directories:
    if os.path.exists(directory):
        total_lines += count_lines_in_directory(directory)
    else:
        print(f"Directory {directory} not found.")

# Process individual files
for file in files:
    if os.path.exists(file):
        lines = count_lines_in_file(file)
        print(f"{file}: {lines} lines")
        total_lines += lines
    else:
        print(f"File {file} not found.")

print(f"\nTotal lines across all files: {total_lines}")
