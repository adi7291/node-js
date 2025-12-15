//accessing command line argument using process.argv
console.log("All arguments:", process.argv);
console.log("First argument:", process.argv[2]);
console.log("Second argument:", process.argv[3]);

console.log("Environment:", process.env.NODE_ENV || "development");
console.log("Custom variable:", process.env.MY_VARIABLE);
console.log("Database URL:", process.env.DATABASE_URL || "Not set");
