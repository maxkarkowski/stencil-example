import { Component, Host, h, State, Prop } from '@stencil/core';
import { getData } from '../../api/api';
import { Photo } from '../../models/photo';
@Component({
  tag: 'api-component',
  styleUrl: 'api-component.css',
  shadow: true,
})
export class ApiComponent {
  @State() photos: Photo[] = [];
  @State() isLoading: boolean = true;

  componentWillLoad() {
    this.get();
  }
  async get() {
    try {
      this.photos = await getData();
    } finally {
      this.isLoading = false;
    }
  }

  private handleClick = id => {
    alert(`you clicked photo number ${id}`);
  };

  render() {
    return (
      <Host>
        {this.isLoading && <div data-testid="loading">is loading</div>}
        {!this.isLoading && (
          <div>
            <counter-component amount={this.photos.length} />
            <div class="photos" data-testid="photos">
              {this.photos.map(photo => (
                <div class="photo" data-testid={`photo-${photo.id}`}>
                  <p>{photo.id}</p>
                  <img src={photo.thumbnailUrl} />
                  <button onClick={() => this.handleClick(photo.id)} data-testid={`photo-link-${photo.id}`}>
                    Click
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </Host>
    );
  }
}
