#!/usr/bin/env bash

filename="blog-backup-$(date +%Y-%m-%d).tar.gz"

tar -czf /tmp/"$filename" *
tsz /tmp/"$filename"

