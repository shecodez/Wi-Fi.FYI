<script setup>
import { VueRecaptcha } from 'vue-recaptcha';
const config = useRuntimeConfig();
import Comment from './Comment.vue';

const props = defineProps(['slug']);

const state = reactive({
  loading: false,
  error: null,
  comments: [],
});

const comment = reactive({
  name: '',
  email: '',
  message: '',
});

async function submitComment() {
  state.loading = true;

  const GITHUB_USERNAME = 'shecodez';
  const GITHUB_REPO = 'vvifi-fyi';
  const BRANCH = 'master';
  const PROPERTY = 'comments';
  const STATICMAN_POST_URL = `https://vvifi-staticman.herokuapp.com/v3/entry/github/${GITHUB_USERNAME}/${GITHUB_REPO}/${BRANCH}/${PROPERTY}`;
  try {
    const { data: res } = await useFetch(STATICMAN_POST_URL, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields: comment, options: { slug: props.slug } }),
    });
    console.log('comment submission successful', res);
    // TODO: Thank you notification
  } catch (err) {
    console.error(err);
    state.error = err.error_description || err.message;
  } finally {
    state.loading = false;
    comment = { message: '', name: '', email: '' };
  }
}
</script>

<template>
  <div class="flex flex-col md:flex-row gap-2 my-6">
    <div class="w-full md:m-4">
      <h3>Leave a comment</h3>
      <div v-if="state.error" class="alert alert-error rounded my-2">
        <div class="flex-1 flex gap-2 justify-start">
          <!-- <Icon icon="carbon:error" width="24" /> -->
          <label>{{ state.error }}</label>
        </div>
      </div>

      <form class="comment-form" @submit.prevent="submitComment">
        <div class="form-control required">
          <label for="message">Message</label>
          <textarea
            v-model="comment.message"
            name="message"
            rows="4"
            placeholder="Your comment (Markdown accepted)"
            required
          />
          <span class="hint">
            Learn now to write Markdown with this
            <a rel="nofollow" href="https://www.markdownguide.org/cheat-sheet" target="_blank" tabindex="-1">Cheat Sheet</a>.
          </span>
        </div>

        <div class="form-control required">
          <label for="name">Name</label>
          <input v-model="comment.name" name="name" type="text" placeholder="Name" required />
        </div>

        <div class="form-control">
          <label for="email">E-Mail</label>
          <input v-model="comment.email" name="email" type="email" placeholder="E-Mail Address (optional)" required />
          <span class="hint">
            Email is used to display
            <a rel="nofollow" href="https://gravatar.com/" target="_blank" tabindex="-1">Gravatar</a>.
          </span>
        </div>

        <div class="form-control">
          <vue-recaptcha :sitekey="config.public.reCaptchaSiteKey"></vue-recaptcha> 
        </div>
        
        <button type="submit" class="comment-btn">
          {{ state.loading ? 'Loading...' : 'Submit' }}
        </button>
      </form>
    </div>
    <div class="w-full md:m-4">
      <h3>View Comments</h3>
      <ul v-if="state.comments.length">
        <li v-for="comment in state.comments" :key="comment.id">
          {{ comment }}
          <!-- <Comment :comment="comment" /> -->
        </li>
      </ul>
      <div v-else>
        <p>No comments yet.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  @apply font-bold text-2xl mb-2;
}

.comment-form .form-control {
  @apply mb-4 w-full;
}
.form-control .hint {
  @apply text-xs text-slate-500;
}
a {
  @apply underline cursor-pointer;
}
.form-control label {
  @apply uppercase text-xs font-bold py-1;
}
.comment-form input,
.comment-form textarea {
  @apply border block w-full p-3 rounded;
}
.comment-form .form-control.required label:after {
  content: ' *';
  color: #e32;
  display: inline;
}
.comment-btn {
  @apply bg-slate-200 hover:bg-slate-400 font-bold uppercase px-4 py-2 rounded float-right;
}

.alert {
  @apply p-4 bg-slate-200 border border-slate-500;
}
.alert.alert-error {
  @apply bg-red-200 border-red-500 text-red-500;
}
</style>
