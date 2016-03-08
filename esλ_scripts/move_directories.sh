#! /bin/sh
#
# move_directories.sh
# Copyright (C) 2016 pauljohnson <pauljohnson@Paul-Johnsons-MacBook-Pro.local>
#
# Distributed under terms of the MIT license.
#

cd packages
for file in * ; do mv "$file" "eslambda-$file" ; done
cd ..
