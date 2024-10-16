#!/usr/bin/env node
import { Command } from 'commander';
import inquirer from 'inquirer'
import { sendWebhook } from './commands/webhook.js';

const program = new Command();

program.name("instaleap").description("Your terminal task manager!").version("1.0.0");

program.command("hello")
  .description("Send a hello to the webhook")
  .action(async () => {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
    ]);
    sendWebhook(answers.name);
  });

program.parse();