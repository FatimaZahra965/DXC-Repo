FROM maven:3.8.5-openjdk-11 as builder
COPY . /tmp/src
WORKDIR /tmp/src
RUN mvn -B -DskipTests clean package

FROM openjdk:11
WORKDIR /app
COPY --from=builder /tmp/src/target/microservice-prestation.jar .
CMD  ["java", "-jar", "-Dspring.profiles.active=dev", "microservice-prestation.jar"]
