import moxios from 'moxios'
import api, {requests, HISTORY_URL} from "./api";

describe('moxios tests', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('calls getPresentVoltage callback on axios response', async () => {
    const mockResponse = { voltage: 12.6 }

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: mockResponse
      })
    })

    const mockCallback = jest.fn()
    await api.getPresentVoltage(mockCallback)

    expect(mockCallback).toHaveBeenCalledWith(mockResponse)
  })
})
