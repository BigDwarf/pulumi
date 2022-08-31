// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// This file exports metadata about the context in which a program is being run.

import * as settings from "./runtime/settings";

/**
 * getOrganization returns the current organization name.  It throws an exception if none is registered.
 */
export function getOrganization(): string {
    return settings.getOrganization();
}
/**
 * getProject returns the current project name.  It throws an exception if none is registered.
 */
export function getProject(): string {
    return settings.getProject();
}
/**
 * getStack returns the current stack name.  It throws an exception if none is registered.
 */
export function getStack(): string {
    return settings.getStack();
}
