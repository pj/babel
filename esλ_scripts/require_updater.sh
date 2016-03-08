#! /bin/sh
#
# require_updater.sh
# Copyright (C) 2016 pauljohnson <paul@johnson.kiwi.nz>
#
# Distributed under terms of the MIT license.
#

find packages -name "*.js" -not -path "*/node_modules/*" -not -path "*/lib/*" -type f \
    -exec sed -i '' 's|require("babel|require("eslambda-babel|g' {} +
find packages -name "*.js" -not -path "*/node_modules/*" -not -path "*/lib/*" -type f \
    -exec sed -i '' 's|require("babylon|require("eslambda-babylon|g' {} +
find packages -name "*.js" -not -path "*/node_modules/*" -not -path "*/lib/*" -type f \
    -exec sed -i '' 's|from "babel|from "eslambda-babel|g' {} +
find packages/eslambda-babel-traverse/src -name "*.js" -not -path "*/node_modules/*" -type f \
    -exec sed -i '' 's|from "babel|from "eslambda-babel|g' {} +
find packages -name "*.js" -not -path "*/node_modules/*" -not -path "*/lib/*" -type f \
    -exec sed -i '' 's|from "babylon|from "eslambda-babylon|g' {} +
#find packages -name "*.js" -not -path "*/node_modules/*" -not -path "*/lib/*" -type f \
    #-exec sed -i '' 's|require("../../babel|require("../../eslambda-babel|g' {} +
# import "babel
find packages -name "*.js" -not -path "*/node_modules/*" -not -path "*/lib/*" -type f \
    -exec sed -i '' 's|import "babel|import "eslambda-babel|g' {} +

find packages -name "*.js" -not -path "*/node_modules/*" -not -path "*/lib/*" -type f \
    -exec sed -i '' 's|../../babel-|../../eslambda-babel-|g' {} +

# RUNTIME_MODULE_NAME
find packages -name "*.js" -not -path "*/node_modules/*" -not -path "*/lib/*" -type f \
    -exec sed -i '' 's|RUNTIME_MODULE_NAME = "babel-runtime"|RUNTIME_MODULE_NAME = "eslambda-babel-runtime"|g' {} +
