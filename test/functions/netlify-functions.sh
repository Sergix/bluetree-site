#!/bin/sh

netlify functions:invoke submission-created --payload "./payload.json"
