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

tacmembersCsvFile = os.path.dirname(os.path.realpath(__file__))+'/../../_data/tacmembers.csv'

committeeURL = 'https://api-gw.platform.linuxfoundation.org/project-service/v2/public/projects/a0941000002wBymAAE/committees/163b26f7-a49b-40a3-89bb-e0592296c003/members'


csvRows = []

with urllib.request.urlopen(committeeURL) as committeeURLResponse:
    committeeURLResponseJSON = json.load(committeeURLResponse)
    for committeeMember in committeeURLResponseJSON['Data']:
        if committeeMember['VotingStatus'] != 'Observer':
            print("Processing {} {}...".format(committeeMember['FirstName'],committeeMember['LastName']))
            csvRows.append({
                'Full Name': "{} {}".format(committeeMember['FirstName'],committeeMember['LastName']),
                'Account Name: Account Name': committeeMember['Organization']['Name'] if 'Organization' in committeeMember and 'Name' in committeeMember['Organization'] else None,
                'Appointed By': committeeMember['AppointedBy'] if 'AppointedBy' in committeeMember else None,
                'Voting Status': committeeMember['VotingStatus'],
                'Special Role': committeeMember['Role'],
                'Title': committeeMember['Title'],
                'HeadshotURL': committeeMember['LogoURL']
                })

with open(tacmembersCsvFile, 'w') as tacmembersCsvFileObject:
    writer = csv.DictWriter(tacmembersCsvFileObject, fieldnames = csvRows[0].keys())
    writer.writeheader() 
    writer.writerows(csvRows) 
