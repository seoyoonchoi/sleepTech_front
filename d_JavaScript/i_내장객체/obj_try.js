let data = "1999,01,01\n2000,02,02";
data.trim().split("\n").map(line => line.split(","));