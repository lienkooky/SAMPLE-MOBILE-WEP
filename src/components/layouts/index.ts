/* page */
import PageContainer from 'components/layouts/PageContainer';
import PageHeader from 'components/layouts/PageHeader';
import PageBody from 'components/layouts/PageBody';

/* view */
import ViewContainer from 'components/layouts/ViewContainer';
import ViewHeader from 'components/layouts/ViewHeader';
import ViewBody from 'components/layouts/ViewBody';
import ViewFloatingFooter from 'components/layouts/ViewFloatingFooter';

/* task */
import Task from 'components/layouts/Task';
import Process from 'components/layouts/Process';

export {PageContainer, PageHeader, PageBody, ViewContainer, ViewHeader, ViewBody, ViewFloatingFooter, Task, Process};

/* className={`something ${type || ''}`} type이 falsy일 때 "undefined" 문자열을 반환
   className={clsx('something', type)} type이 falsy일 때 "빈" 문자열을 반환
*/
