<<<<<<< HEAD
FROM openjdk:13
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline

COPY src ./src

CMD ["./mvnw", "spring-boot:run"]
=======
FROM maven:3.8.5-openjdk-11 as builder
COPY . /tmp/src
WORKDIR /tmp/src
RUN mvn -B -DskipTests clean package

FROM openjdk:11
WORKDIR /app
COPY --from=builder /tmp/src/target/microservice-competance.jar .
CMD  ["java", "-jar", "-Dspring.profiles.active=dev", "microservice-competance.jar"]
>>>>>>> khalid
