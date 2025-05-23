// component/StoryForm.js
export function StoryFormFields() {
  return `
    <label for="description">Story Description</label>
    <textarea id="description" name="description" required minlength="10" placeholder="Write story description here..."></textarea>
  `;
}

export function StoryFormLogin() {
  return `
    <label for="email">Email address</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Password</label>
    <input type="password" id="password" name="password" required>
  `;
}

export function StoryFormRegister() {
  return `
    <label for="name">Full name</label>
    <input type="text" id="name" name="name" required minlength="2">

    <label for="email">Email address</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Password</label>
    <input type="password" id="password" name="password" required minlength="8">
  `;
}
