import './jestIgnoreWarnings';
import './forbidConsoleLogs';
import { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

// Mock HTMLInputElement for Node.js/Jest environment
global.HTMLInputElement = global.HTMLInputElement || function () {};
