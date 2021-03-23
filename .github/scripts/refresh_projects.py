#!/usr/bin/env python3
#
# Copyright this project and it's contributors
# SPDX-License-Identifier: Apache-2.0
#
# encoding=utf8

import chevron
import requests
import yaml

filename = 'README.md'
template = 'projects.mustache'
overrides = 'projects_overrides.yaml'
landscapeUrl = 'https://landscape.openmainframeproject.org'
projectsEndpoint = landscapeUrl+'/data/exports/projects-hosted.json'
projectEndpoint = landscapeUrl+'/data/items/{}.json'

with requests.get(projectsEndpoint) as projectsEndpointResponse:
    projectsEndpointPayload = projectsEndpointResponse.json()
    for group in projectsEndpointPayload:
        for item in group['items']:
            with requests.get(projectEndpoint.format(item['id'])) as projectsEndpointResponse:
                item['details'] = projectsEndpointResponse.json()
                item['comms'] = {} 
                
                item['comms']['mailingList'] = 'https://lists.openmainframeproject.org/g/{}-disscussion'.format(item['id'])
                item['comms']['slackChannel'] = '%23{}'.format(item['id'])

    with open(template, 'r') as f:
        print(chevron.render(f,projectsEndpointPayload))

