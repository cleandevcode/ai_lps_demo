import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

import Review from './Review';

class SimpleForm extends Component {
    render() {
      return (
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Hi, I am voila how can I assist you today',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: 'provide',
            },
            {
              id: 'provide',
              message: 'Services We provide',
              trigger: 'service',
            },
            {
              id: 'service',
              options: [
                { value: 'Webisite', label: 'Website', trigger: '5' },
                { value: 'Graphic design', label: 'Grapgic design', trigger: '5' },
                { value: 'Mobile application', label: 'Mobile application', trigger: '5' },
              ],
            },
            {
              id: '5',
              message: 'Your Business name',
              trigger: 'business',
            },
            {
                id: 'business',
                user: true,
                trigger: '7',
            },
            {
              id: '7',
              message: 'Great! Check out your summary',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: 'Would you like to update some field?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                { value: 'no', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'update-yes',
              message: 'What field would you like to update?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Name', trigger: 'update-name' },
                { value: 'service', label: 'service', trigger: 'update-service' },
                { value: 'service', label: 'business', trigger: 'update-business' },
              ],
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: '7',
            },
            {
              id: 'update-service',
              update: 'service',
              trigger: '7',
            },
            {
              id: 'update-business',
              update: 'business',
              trigger: '7',
            },
            {
              id: 'end-message',
              message: 'Thanks! Your data was submitted successfully!',
              end: true,
            },
          ]}
        />
      );
    }
  }
  
  export default SimpleForm;