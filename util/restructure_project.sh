#!/bin/bash

# Print status message
echo "Starting project restructuring..."

# Create the standard Maven directory structure
echo "Creating Maven directory structure..."
mkdir -p src/main/java/com/company/onboarding/backend/{config,models,services,servlets}
mkdir -p src/main/resources/config
mkdir -p src/main/resources

# Move Java files into the src/main/java directory
echo "Moving Java files into the src/main/java directory..."
mv backend/config/* src/main/java/com/company/onboarding/backend/config
mv backend/models/* src/main/java/com/company/onboarding/backend/models
mv backend/services/* src/main/java/com/company/onboarding/backend/services
mv backend/servlets/* src/main/java/com/company/onboarding/backend/servlets

# Move any resource files (if any) into src/main/resources
# In case there are resource files in 'backend/config', move them to 'resources/config'
# You can customize this based on your actual resources

# Create a basic pom.xml file for Maven configuration
echo "Creating pom.xml for Maven..."
cat > pom.xml << EOL
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.company.onboarding</groupId>
    <artifactId>onboarding-platform</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>war</packaging>

    <properties>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
    </properties>

    <dependencies>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>4.0.1</version>
            <scope>provided</scope>
        </dependency>

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.25</version>
        </dependency>

        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13.1</version>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>org.apache.logging.log4j</groupId>
            <artifactId>log4j-api</artifactId>
            <version>2.14.1</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-war-plugin</artifactId>
                <version>3.3.1</version>
            </plugin>
        </plugins>
    </build>
</project>
EOL

# Output success message
echo "Project successfully restructured with Maven setup."

# Final reminder: The user should now move frontend and other components into Maven directory structure manually
echo "Now, you can manually place the frontend code into the appropriate directories. Move the files into 'frontend' and 'src/main/resources'."

