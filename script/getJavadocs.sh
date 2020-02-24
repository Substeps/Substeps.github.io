#!/bin/bash

set -e # halt script on error

mvn -U dependency:unpack -Dartifact=org.substeps:webdriver-substeps:LATEST:jar:javadoc -DoutputDirectory=webdriver-substeps-apidocs