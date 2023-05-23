#!/usr/bin/env python3
#
# Copyright this project and its contributors
# SPDX-License-Identifier: Apache-2.0
#
# encoding=utf8

import csv
import urllib.request
import json
import os

csvFile = os.path.dirname(os.path.realpath(__file__))+'/../../_data/meeting-agenda-items.csv'
endpointURL = 'https://api.github.com/repos/openmainframeproject/tac/issues?labels=meeting-agenda'

csvRows = []

with urllib.request.urlopen(endpointURL) as endpointResponse:
    for agendaitem in json.load(endpointResponse):
        print("Processing {}...".format(agendaitem['title']))
        csvRows.append({
            'title': agendaitem['title'],
            'html_url': agendaitem['html_url'],
            'number': agendaitem['number'],
            })

with open(csvFile, 'w') as csvFileObject:
    writer = csv.DictWriter(csvFileObject, fieldnames = csvRows[0].keys())
    writer.writeheader() 
    writer.writerows(csvRows) 
